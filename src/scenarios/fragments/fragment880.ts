import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken878 } from "./fragment878";
import type { FragmentToken879 } from "./fragment879";

export const FRAGMENT_880 = gql(`
  fragment Fragment880 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult880 = ResultOf<typeof FRAGMENT_880>;
type FragmentSelf880 = NonNullable<FragmentResult880>;

export type FragmentToken880 =
  | FragmentSelf880["__typename"]
  | FragmentSelf880["typenameHint"] | FragmentToken878 | FragmentToken879;
