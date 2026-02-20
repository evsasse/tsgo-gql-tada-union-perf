import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4147 } from "./fragment4147";
import type { FragmentToken4148 } from "./fragment4148";

export const FRAGMENT_4149 = gql(`
  fragment Fragment4149 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult4149 = ResultOf<typeof FRAGMENT_4149>;
type FragmentSelf4149 = NonNullable<FragmentResult4149>;

export type FragmentToken4149 =
  | FragmentSelf4149["__typename"]
  | FragmentSelf4149["typenameHint"] | FragmentToken4147 | FragmentToken4148;
