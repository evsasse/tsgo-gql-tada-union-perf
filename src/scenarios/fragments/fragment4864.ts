import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4862 } from "./fragment4862";
import type { FragmentToken4863 } from "./fragment4863";

export const FRAGMENT_4864 = gql(`
  fragment Fragment4864 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult4864 = ResultOf<typeof FRAGMENT_4864>;
type FragmentSelf4864 = NonNullable<FragmentResult4864>;

export type FragmentToken4864 =
  | FragmentSelf4864["__typename"]
  | FragmentSelf4864["typenameHint"] | FragmentToken4862 | FragmentToken4863;
