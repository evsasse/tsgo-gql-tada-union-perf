import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4704 } from "./fragment4704";
import type { FragmentToken4705 } from "./fragment4705";

export const FRAGMENT_4706 = gql(`
  fragment Fragment4706 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult4706 = ResultOf<typeof FRAGMENT_4706>;
type FragmentSelf4706 = NonNullable<FragmentResult4706>;

export type FragmentToken4706 =
  | FragmentSelf4706["__typename"]
  | FragmentSelf4706["typenameHint"] | FragmentToken4704 | FragmentToken4705;
