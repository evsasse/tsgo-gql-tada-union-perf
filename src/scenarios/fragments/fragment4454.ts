import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4452 } from "./fragment4452";
import type { FragmentToken4453 } from "./fragment4453";

export const FRAGMENT_4454 = gql(`
  fragment Fragment4454 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult4454 = ResultOf<typeof FRAGMENT_4454>;
type FragmentSelf4454 = NonNullable<FragmentResult4454>;

export type FragmentToken4454 =
  | FragmentSelf4454["__typename"]
  | FragmentSelf4454["typenameHint"] | FragmentToken4452 | FragmentToken4453;
