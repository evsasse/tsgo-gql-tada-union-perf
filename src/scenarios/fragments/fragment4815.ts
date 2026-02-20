import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4813 } from "./fragment4813";
import type { FragmentToken4814 } from "./fragment4814";

export const FRAGMENT_4815 = gql(`
  fragment Fragment4815 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult4815 = ResultOf<typeof FRAGMENT_4815>;
type FragmentSelf4815 = NonNullable<FragmentResult4815>;

export type FragmentToken4815 =
  | FragmentSelf4815["__typename"]
  | FragmentSelf4815["typenameHint"] | FragmentToken4813 | FragmentToken4814;
