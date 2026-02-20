import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4443 } from "./fragment4443";
import type { FragmentToken4444 } from "./fragment4444";

export const FRAGMENT_4445 = gql(`
  fragment Fragment4445 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult4445 = ResultOf<typeof FRAGMENT_4445>;
type FragmentSelf4445 = NonNullable<FragmentResult4445>;

export type FragmentToken4445 =
  | FragmentSelf4445["__typename"]
  | FragmentSelf4445["typenameHint"] | FragmentToken4443 | FragmentToken4444;
