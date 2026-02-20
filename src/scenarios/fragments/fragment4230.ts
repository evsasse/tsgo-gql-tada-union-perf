import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4228 } from "./fragment4228";
import type { FragmentToken4229 } from "./fragment4229";

export const FRAGMENT_4230 = gql(`
  fragment Fragment4230 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult4230 = ResultOf<typeof FRAGMENT_4230>;
type FragmentSelf4230 = NonNullable<FragmentResult4230>;

export type FragmentToken4230 =
  | FragmentSelf4230["__typename"]
  | FragmentSelf4230["typenameHint"] | FragmentToken4228 | FragmentToken4229;
