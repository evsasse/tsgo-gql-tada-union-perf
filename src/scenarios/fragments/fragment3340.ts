import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3338 } from "./fragment3338";
import type { FragmentToken3339 } from "./fragment3339";

export const FRAGMENT_3340 = gql(`
  fragment Fragment3340 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult3340 = ResultOf<typeof FRAGMENT_3340>;
type FragmentSelf3340 = NonNullable<FragmentResult3340>;

export type FragmentToken3340 =
  | FragmentSelf3340["__typename"]
  | FragmentSelf3340["typenameHint"] | FragmentToken3338 | FragmentToken3339;
