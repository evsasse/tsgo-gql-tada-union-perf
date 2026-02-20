import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4728 } from "./fragment4728";
import type { FragmentToken4729 } from "./fragment4729";

export const FRAGMENT_4730 = gql(`
  fragment Fragment4730 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult4730 = ResultOf<typeof FRAGMENT_4730>;
type FragmentSelf4730 = NonNullable<FragmentResult4730>;

export type FragmentToken4730 =
  | FragmentSelf4730["__typename"]
  | FragmentSelf4730["typenameHint"] | FragmentToken4728 | FragmentToken4729;
