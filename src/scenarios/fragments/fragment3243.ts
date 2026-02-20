import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3241 } from "./fragment3241";
import type { FragmentToken3242 } from "./fragment3242";

export const FRAGMENT_3243 = gql(`
  fragment Fragment3243 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult3243 = ResultOf<typeof FRAGMENT_3243>;
type FragmentSelf3243 = NonNullable<FragmentResult3243>;

export type FragmentToken3243 =
  | FragmentSelf3243["__typename"]
  | FragmentSelf3243["typenameHint"] | FragmentToken3241 | FragmentToken3242;
