import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1491 } from "./fragment1491";
import type { FragmentToken1492 } from "./fragment1492";

export const FRAGMENT_1493 = gql(`
  fragment Fragment1493 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult1493 = ResultOf<typeof FRAGMENT_1493>;
type FragmentSelf1493 = NonNullable<FragmentResult1493>;

export type FragmentToken1493 =
  | FragmentSelf1493["__typename"]
  | FragmentSelf1493["typenameHint"] | FragmentToken1491 | FragmentToken1492;
