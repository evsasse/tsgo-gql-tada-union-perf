import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4717 } from "./fragment4717";
import type { FragmentToken4718 } from "./fragment4718";

export const FRAGMENT_4719 = gql(`
  fragment Fragment4719 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult4719 = ResultOf<typeof FRAGMENT_4719>;
type FragmentSelf4719 = NonNullable<FragmentResult4719>;

export type FragmentToken4719 =
  | FragmentSelf4719["__typename"]
  | FragmentSelf4719["typenameHint"] | FragmentToken4717 | FragmentToken4718;
