import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1563 } from "./fragment1563";
import type { FragmentToken1564 } from "./fragment1564";

export const FRAGMENT_1565 = gql(`
  fragment Fragment1565 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult1565 = ResultOf<typeof FRAGMENT_1565>;
type FragmentSelf1565 = NonNullable<FragmentResult1565>;

export type FragmentToken1565 =
  | FragmentSelf1565["__typename"]
  | FragmentSelf1565["typenameHint"] | FragmentToken1563 | FragmentToken1564;
