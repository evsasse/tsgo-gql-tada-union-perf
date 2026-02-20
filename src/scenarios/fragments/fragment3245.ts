import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3243 } from "./fragment3243";
import type { FragmentToken3244 } from "./fragment3244";

export const FRAGMENT_3245 = gql(`
  fragment Fragment3245 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult3245 = ResultOf<typeof FRAGMENT_3245>;
type FragmentSelf3245 = NonNullable<FragmentResult3245>;

export type FragmentToken3245 =
  | FragmentSelf3245["__typename"]
  | FragmentSelf3245["typenameHint"] | FragmentToken3243 | FragmentToken3244;
