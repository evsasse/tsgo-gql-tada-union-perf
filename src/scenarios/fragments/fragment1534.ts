import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1532 } from "./fragment1532";
import type { FragmentToken1533 } from "./fragment1533";

export const FRAGMENT_1534 = gql(`
  fragment Fragment1534 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult1534 = ResultOf<typeof FRAGMENT_1534>;
type FragmentSelf1534 = NonNullable<FragmentResult1534>;

export type FragmentToken1534 =
  | FragmentSelf1534["__typename"]
  | FragmentSelf1534["typenameHint"] | FragmentToken1532 | FragmentToken1533;
