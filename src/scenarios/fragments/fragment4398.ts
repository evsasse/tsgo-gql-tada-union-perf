import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4396 } from "./fragment4396";
import type { FragmentToken4397 } from "./fragment4397";

export const FRAGMENT_4398 = gql(`
  fragment Fragment4398 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult4398 = ResultOf<typeof FRAGMENT_4398>;
type FragmentSelf4398 = NonNullable<FragmentResult4398>;

export type FragmentToken4398 =
  | FragmentSelf4398["__typename"]
  | FragmentSelf4398["typenameHint"] | FragmentToken4396 | FragmentToken4397;
