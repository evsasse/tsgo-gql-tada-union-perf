import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1304 } from "./fragment1304";
import type { FragmentToken1305 } from "./fragment1305";

export const FRAGMENT_1306 = gql(`
  fragment Fragment1306 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult1306 = ResultOf<typeof FRAGMENT_1306>;
type FragmentSelf1306 = NonNullable<FragmentResult1306>;

export type FragmentToken1306 =
  | FragmentSelf1306["__typename"]
  | FragmentSelf1306["typenameHint"] | FragmentToken1304 | FragmentToken1305;
