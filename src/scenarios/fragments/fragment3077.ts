import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3075 } from "./fragment3075";
import type { FragmentToken3076 } from "./fragment3076";

export const FRAGMENT_3077 = gql(`
  fragment Fragment3077 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult3077 = ResultOf<typeof FRAGMENT_3077>;
type FragmentSelf3077 = NonNullable<FragmentResult3077>;

export type FragmentToken3077 =
  | FragmentSelf3077["__typename"]
  | FragmentSelf3077["typenameHint"] | FragmentToken3075 | FragmentToken3076;
