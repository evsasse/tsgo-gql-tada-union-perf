import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4716 } from "./fragment4716";
import type { FragmentToken4717 } from "./fragment4717";

export const FRAGMENT_4718 = gql(`
  fragment Fragment4718 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult4718 = ResultOf<typeof FRAGMENT_4718>;
type FragmentSelf4718 = NonNullable<FragmentResult4718>;

export type FragmentToken4718 =
  | FragmentSelf4718["__typename"]
  | FragmentSelf4718["typenameHint"] | FragmentToken4716 | FragmentToken4717;
