import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken886 } from "./fragment886";
import type { FragmentToken887 } from "./fragment887";

export const FRAGMENT_888 = gql(`
  fragment Fragment888 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult888 = ResultOf<typeof FRAGMENT_888>;
type FragmentSelf888 = NonNullable<FragmentResult888>;

export type FragmentToken888 =
  | FragmentSelf888["__typename"]
  | FragmentSelf888["typenameHint"] | FragmentToken886 | FragmentToken887;
