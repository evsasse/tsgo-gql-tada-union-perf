import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken195 } from "./fragment195";
import type { FragmentToken196 } from "./fragment196";

export const FRAGMENT_197 = gql(`
  fragment Fragment197 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult197 = ResultOf<typeof FRAGMENT_197>;
type FragmentSelf197 = NonNullable<FragmentResult197>;

export type FragmentToken197 =
  | FragmentSelf197["__typename"]
  | FragmentSelf197["typenameHint"] | FragmentToken195 | FragmentToken196;
