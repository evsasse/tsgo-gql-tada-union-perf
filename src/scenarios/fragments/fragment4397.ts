import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4395 } from "./fragment4395";
import type { FragmentToken4396 } from "./fragment4396";

export const FRAGMENT_4397 = gql(`
  fragment Fragment4397 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult4397 = ResultOf<typeof FRAGMENT_4397>;
type FragmentSelf4397 = NonNullable<FragmentResult4397>;

export type FragmentToken4397 =
  | FragmentSelf4397["__typename"]
  | FragmentSelf4397["typenameHint"] | FragmentToken4395 | FragmentToken4396;
