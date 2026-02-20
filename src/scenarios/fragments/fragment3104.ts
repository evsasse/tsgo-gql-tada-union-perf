import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3102 } from "./fragment3102";
import type { FragmentToken3103 } from "./fragment3103";

export const FRAGMENT_3104 = gql(`
  fragment Fragment3104 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult3104 = ResultOf<typeof FRAGMENT_3104>;
type FragmentSelf3104 = NonNullable<FragmentResult3104>;

export type FragmentToken3104 =
  | FragmentSelf3104["__typename"]
  | FragmentSelf3104["typenameHint"] | FragmentToken3102 | FragmentToken3103;
