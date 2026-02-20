import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4265 } from "./fragment4265";
import type { FragmentToken4266 } from "./fragment4266";

export const FRAGMENT_4267 = gql(`
  fragment Fragment4267 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult4267 = ResultOf<typeof FRAGMENT_4267>;
type FragmentSelf4267 = NonNullable<FragmentResult4267>;

export type FragmentToken4267 =
  | FragmentSelf4267["__typename"]
  | FragmentSelf4267["typenameHint"] | FragmentToken4265 | FragmentToken4266;
