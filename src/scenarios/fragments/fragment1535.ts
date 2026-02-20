import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1533 } from "./fragment1533";
import type { FragmentToken1534 } from "./fragment1534";

export const FRAGMENT_1535 = gql(`
  fragment Fragment1535 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult1535 = ResultOf<typeof FRAGMENT_1535>;
type FragmentSelf1535 = NonNullable<FragmentResult1535>;

export type FragmentToken1535 =
  | FragmentSelf1535["__typename"]
  | FragmentSelf1535["typenameHint"] | FragmentToken1533 | FragmentToken1534;
