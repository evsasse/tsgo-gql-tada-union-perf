import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken462 } from "./fragment462";
import type { FragmentToken463 } from "./fragment463";

export const FRAGMENT_464 = gql(`
  fragment Fragment464 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult464 = ResultOf<typeof FRAGMENT_464>;
type FragmentSelf464 = NonNullable<FragmentResult464>;

export type FragmentToken464 =
  | FragmentSelf464["__typename"]
  | FragmentSelf464["typenameHint"] | FragmentToken462 | FragmentToken463;
