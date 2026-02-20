import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4413 } from "./fragment4413";
import type { FragmentToken4414 } from "./fragment4414";

export const FRAGMENT_4415 = gql(`
  fragment Fragment4415 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult4415 = ResultOf<typeof FRAGMENT_4415>;
type FragmentSelf4415 = NonNullable<FragmentResult4415>;

export type FragmentToken4415 =
  | FragmentSelf4415["__typename"]
  | FragmentSelf4415["typenameHint"] | FragmentToken4413 | FragmentToken4414;
