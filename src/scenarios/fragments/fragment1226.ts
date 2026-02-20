import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1224 } from "./fragment1224";
import type { FragmentToken1225 } from "./fragment1225";

export const FRAGMENT_1226 = gql(`
  fragment Fragment1226 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult1226 = ResultOf<typeof FRAGMENT_1226>;
type FragmentSelf1226 = NonNullable<FragmentResult1226>;

export type FragmentToken1226 =
  | FragmentSelf1226["__typename"]
  | FragmentSelf1226["typenameHint"] | FragmentToken1224 | FragmentToken1225;
