import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4392 } from "./fragment4392";
import type { FragmentToken4393 } from "./fragment4393";

export const FRAGMENT_4394 = gql(`
  fragment Fragment4394 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult4394 = ResultOf<typeof FRAGMENT_4394>;
type FragmentSelf4394 = NonNullable<FragmentResult4394>;

export type FragmentToken4394 =
  | FragmentSelf4394["__typename"]
  | FragmentSelf4394["typenameHint"] | FragmentToken4392 | FragmentToken4393;
