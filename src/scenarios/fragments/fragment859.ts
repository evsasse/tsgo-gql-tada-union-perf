import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken857 } from "./fragment857";
import type { FragmentToken858 } from "./fragment858";

export const FRAGMENT_859 = gql(`
  fragment Fragment859 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult859 = ResultOf<typeof FRAGMENT_859>;
type FragmentSelf859 = NonNullable<FragmentResult859>;

export type FragmentToken859 =
  | FragmentSelf859["__typename"]
  | FragmentSelf859["typenameHint"] | FragmentToken857 | FragmentToken858;
