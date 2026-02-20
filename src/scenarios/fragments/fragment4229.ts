import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4227 } from "./fragment4227";
import type { FragmentToken4228 } from "./fragment4228";

export const FRAGMENT_4229 = gql(`
  fragment Fragment4229 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult4229 = ResultOf<typeof FRAGMENT_4229>;
type FragmentSelf4229 = NonNullable<FragmentResult4229>;

export type FragmentToken4229 =
  | FragmentSelf4229["__typename"]
  | FragmentSelf4229["typenameHint"] | FragmentToken4227 | FragmentToken4228;
