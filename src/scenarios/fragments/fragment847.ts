import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken845 } from "./fragment845";
import type { FragmentToken846 } from "./fragment846";

export const FRAGMENT_847 = gql(`
  fragment Fragment847 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult847 = ResultOf<typeof FRAGMENT_847>;
type FragmentSelf847 = NonNullable<FragmentResult847>;

export type FragmentToken847 =
  | FragmentSelf847["__typename"]
  | FragmentSelf847["typenameHint"] | FragmentToken845 | FragmentToken846;
