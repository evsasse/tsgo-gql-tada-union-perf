import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4839 } from "./fragment4839";
import type { FragmentToken4840 } from "./fragment4840";

export const FRAGMENT_4841 = gql(`
  fragment Fragment4841 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult4841 = ResultOf<typeof FRAGMENT_4841>;
type FragmentSelf4841 = NonNullable<FragmentResult4841>;

export type FragmentToken4841 =
  | FragmentSelf4841["__typename"]
  | FragmentSelf4841["typenameHint"] | FragmentToken4839 | FragmentToken4840;
