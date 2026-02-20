import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3827 } from "./fragment3827";
import type { FragmentToken3828 } from "./fragment3828";

export const FRAGMENT_3829 = gql(`
  fragment Fragment3829 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult3829 = ResultOf<typeof FRAGMENT_3829>;
type FragmentSelf3829 = NonNullable<FragmentResult3829>;

export type FragmentToken3829 =
  | FragmentSelf3829["__typename"]
  | FragmentSelf3829["typenameHint"] | FragmentToken3827 | FragmentToken3828;
