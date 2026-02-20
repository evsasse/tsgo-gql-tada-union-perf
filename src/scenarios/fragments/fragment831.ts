import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken829 } from "./fragment829";
import type { FragmentToken830 } from "./fragment830";

export const FRAGMENT_831 = gql(`
  fragment Fragment831 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult831 = ResultOf<typeof FRAGMENT_831>;
type FragmentSelf831 = NonNullable<FragmentResult831>;

export type FragmentToken831 =
  | FragmentSelf831["__typename"]
  | FragmentSelf831["typenameHint"] | FragmentToken829 | FragmentToken830;
