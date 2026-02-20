import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4942 } from "./fragment4942";
import type { FragmentToken4943 } from "./fragment4943";

export const FRAGMENT_4944 = gql(`
  fragment Fragment4944 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult4944 = ResultOf<typeof FRAGMENT_4944>;
type FragmentSelf4944 = NonNullable<FragmentResult4944>;

export type FragmentToken4944 =
  | FragmentSelf4944["__typename"]
  | FragmentSelf4944["typenameHint"] | FragmentToken4942 | FragmentToken4943;
