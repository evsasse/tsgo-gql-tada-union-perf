import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken876 } from "./fragment876";
import type { FragmentToken877 } from "./fragment877";

export const FRAGMENT_878 = gql(`
  fragment Fragment878 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult878 = ResultOf<typeof FRAGMENT_878>;
type FragmentSelf878 = NonNullable<FragmentResult878>;

export type FragmentToken878 =
  | FragmentSelf878["__typename"]
  | FragmentSelf878["typenameHint"] | FragmentToken876 | FragmentToken877;
