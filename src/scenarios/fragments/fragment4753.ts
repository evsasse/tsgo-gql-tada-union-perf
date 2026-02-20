import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4751 } from "./fragment4751";
import type { FragmentToken4752 } from "./fragment4752";

export const FRAGMENT_4753 = gql(`
  fragment Fragment4753 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult4753 = ResultOf<typeof FRAGMENT_4753>;
type FragmentSelf4753 = NonNullable<FragmentResult4753>;

export type FragmentToken4753 =
  | FragmentSelf4753["__typename"]
  | FragmentSelf4753["typenameHint"] | FragmentToken4751 | FragmentToken4752;
