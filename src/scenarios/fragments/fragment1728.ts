import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1726 } from "./fragment1726";
import type { FragmentToken1727 } from "./fragment1727";

export const FRAGMENT_1728 = gql(`
  fragment Fragment1728 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult1728 = ResultOf<typeof FRAGMENT_1728>;
type FragmentSelf1728 = NonNullable<FragmentResult1728>;

export type FragmentToken1728 =
  | FragmentSelf1728["__typename"]
  | FragmentSelf1728["typenameHint"] | FragmentToken1726 | FragmentToken1727;
