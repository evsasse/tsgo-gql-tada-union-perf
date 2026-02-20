import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4994 } from "./fragment4994";
import type { FragmentToken4995 } from "./fragment4995";

export const FRAGMENT_4996 = gql(`
  fragment Fragment4996 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult4996 = ResultOf<typeof FRAGMENT_4996>;
type FragmentSelf4996 = NonNullable<FragmentResult4996>;

export type FragmentToken4996 =
  | FragmentSelf4996["__typename"]
  | FragmentSelf4996["typenameHint"] | FragmentToken4994 | FragmentToken4995;
