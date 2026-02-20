import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3974 } from "./fragment3974";
import type { FragmentToken3975 } from "./fragment3975";

export const FRAGMENT_3976 = gql(`
  fragment Fragment3976 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult3976 = ResultOf<typeof FRAGMENT_3976>;
type FragmentSelf3976 = NonNullable<FragmentResult3976>;

export type FragmentToken3976 =
  | FragmentSelf3976["__typename"]
  | FragmentSelf3976["typenameHint"] | FragmentToken3974 | FragmentToken3975;
