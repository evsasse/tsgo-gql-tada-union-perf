import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4422 } from "./fragment4422";
import type { FragmentToken4423 } from "./fragment4423";

export const FRAGMENT_4424 = gql(`
  fragment Fragment4424 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult4424 = ResultOf<typeof FRAGMENT_4424>;
type FragmentSelf4424 = NonNullable<FragmentResult4424>;

export type FragmentToken4424 =
  | FragmentSelf4424["__typename"]
  | FragmentSelf4424["typenameHint"] | FragmentToken4422 | FragmentToken4423;
