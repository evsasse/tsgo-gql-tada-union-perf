import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4438 } from "./fragment4438";
import type { FragmentToken4439 } from "./fragment4439";

export const FRAGMENT_4440 = gql(`
  fragment Fragment4440 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult4440 = ResultOf<typeof FRAGMENT_4440>;
type FragmentSelf4440 = NonNullable<FragmentResult4440>;

export type FragmentToken4440 =
  | FragmentSelf4440["__typename"]
  | FragmentSelf4440["typenameHint"] | FragmentToken4438 | FragmentToken4439;
