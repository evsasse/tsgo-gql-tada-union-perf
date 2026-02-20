import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken243 } from "./fragment243";
import type { FragmentToken244 } from "./fragment244";

export const FRAGMENT_245 = gql(`
  fragment Fragment245 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult245 = ResultOf<typeof FRAGMENT_245>;
type FragmentSelf245 = NonNullable<FragmentResult245>;

export type FragmentToken245 =
  | FragmentSelf245["__typename"]
  | FragmentSelf245["typenameHint"] | FragmentToken243 | FragmentToken244;
