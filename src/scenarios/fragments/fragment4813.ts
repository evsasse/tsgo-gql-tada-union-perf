import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4811 } from "./fragment4811";
import type { FragmentToken4812 } from "./fragment4812";

export const FRAGMENT_4813 = gql(`
  fragment Fragment4813 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult4813 = ResultOf<typeof FRAGMENT_4813>;
type FragmentSelf4813 = NonNullable<FragmentResult4813>;

export type FragmentToken4813 =
  | FragmentSelf4813["__typename"]
  | FragmentSelf4813["typenameHint"] | FragmentToken4811 | FragmentToken4812;
