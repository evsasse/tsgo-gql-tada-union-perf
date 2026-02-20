import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4616 } from "./fragment4616";
import type { FragmentToken4617 } from "./fragment4617";

export const FRAGMENT_4618 = gql(`
  fragment Fragment4618 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult4618 = ResultOf<typeof FRAGMENT_4618>;
type FragmentSelf4618 = NonNullable<FragmentResult4618>;

export type FragmentToken4618 =
  | FragmentSelf4618["__typename"]
  | FragmentSelf4618["typenameHint"] | FragmentToken4616 | FragmentToken4617;
