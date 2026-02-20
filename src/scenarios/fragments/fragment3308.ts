import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3306 } from "./fragment3306";
import type { FragmentToken3307 } from "./fragment3307";

export const FRAGMENT_3308 = gql(`
  fragment Fragment3308 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult3308 = ResultOf<typeof FRAGMENT_3308>;
type FragmentSelf3308 = NonNullable<FragmentResult3308>;

export type FragmentToken3308 =
  | FragmentSelf3308["__typename"]
  | FragmentSelf3308["typenameHint"] | FragmentToken3306 | FragmentToken3307;
