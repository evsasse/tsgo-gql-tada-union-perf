import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1562 } from "./fragment1562";
import type { FragmentToken1563 } from "./fragment1563";

export const FRAGMENT_1564 = gql(`
  fragment Fragment1564 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult1564 = ResultOf<typeof FRAGMENT_1564>;
type FragmentSelf1564 = NonNullable<FragmentResult1564>;

export type FragmentToken1564 =
  | FragmentSelf1564["__typename"]
  | FragmentSelf1564["typenameHint"] | FragmentToken1562 | FragmentToken1563;
