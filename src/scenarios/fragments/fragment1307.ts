import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1305 } from "./fragment1305";
import type { FragmentToken1306 } from "./fragment1306";

export const FRAGMENT_1307 = gql(`
  fragment Fragment1307 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult1307 = ResultOf<typeof FRAGMENT_1307>;
type FragmentSelf1307 = NonNullable<FragmentResult1307>;

export type FragmentToken1307 =
  | FragmentSelf1307["__typename"]
  | FragmentSelf1307["typenameHint"] | FragmentToken1305 | FragmentToken1306;
