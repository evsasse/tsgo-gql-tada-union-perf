import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3576 } from "./fragment3576";
import type { FragmentToken3577 } from "./fragment3577";

export const FRAGMENT_3578 = gql(`
  fragment Fragment3578 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult3578 = ResultOf<typeof FRAGMENT_3578>;
type FragmentSelf3578 = NonNullable<FragmentResult3578>;

export type FragmentToken3578 =
  | FragmentSelf3578["__typename"]
  | FragmentSelf3578["typenameHint"] | FragmentToken3576 | FragmentToken3577;
