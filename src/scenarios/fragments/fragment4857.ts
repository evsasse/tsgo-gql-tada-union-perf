import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4855 } from "./fragment4855";
import type { FragmentToken4856 } from "./fragment4856";

export const FRAGMENT_4857 = gql(`
  fragment Fragment4857 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult4857 = ResultOf<typeof FRAGMENT_4857>;
type FragmentSelf4857 = NonNullable<FragmentResult4857>;

export type FragmentToken4857 =
  | FragmentSelf4857["__typename"]
  | FragmentSelf4857["typenameHint"] | FragmentToken4855 | FragmentToken4856;
