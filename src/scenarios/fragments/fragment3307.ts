import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3305 } from "./fragment3305";
import type { FragmentToken3306 } from "./fragment3306";

export const FRAGMENT_3307 = gql(`
  fragment Fragment3307 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult3307 = ResultOf<typeof FRAGMENT_3307>;
type FragmentSelf3307 = NonNullable<FragmentResult3307>;

export type FragmentToken3307 =
  | FragmentSelf3307["__typename"]
  | FragmentSelf3307["typenameHint"] | FragmentToken3305 | FragmentToken3306;
