import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4178 } from "./fragment4178";
import type { FragmentToken4179 } from "./fragment4179";

export const FRAGMENT_4180 = gql(`
  fragment Fragment4180 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult4180 = ResultOf<typeof FRAGMENT_4180>;
type FragmentSelf4180 = NonNullable<FragmentResult4180>;

export type FragmentToken4180 =
  | FragmentSelf4180["__typename"]
  | FragmentSelf4180["typenameHint"] | FragmentToken4178 | FragmentToken4179;
